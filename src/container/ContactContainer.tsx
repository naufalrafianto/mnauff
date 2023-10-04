/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import StarsContainer from '@/container/StarsContainer'
import { Heading } from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import toaster, { Toaster } from 'react-hot-toast'
import axios from 'axios'
const formSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email({ message: 'The provided email is not valid' }),
    message: z.string().min(3).max(500, {
        message: 'The message exceeds the maximum character limit of 500',
    }),
})

type formType = z.infer<typeof formSchema>

const formInitialValue: formType = {
    name: '',
    email: '',
    message: '',
}
const ContactContainer = () => {
    const [letterCount, setLetterCount] = React.useState(0)

    const methods = useForm<formType>({
        defaultValues: formInitialValue,
        mode: 'onTouched',
        resolver: zodResolver(formSchema),
    })

    const {
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = methods

    const onSubmit = async (data: formType) => {
        const loadingToast = toaster.loading('Sending email...')
        const config = {
            method: 'post',
            url: '/api/submit',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        if (Object.values(data).some((value) => value.trim() === '')) {
            toaster.error('Please fill in all the fields')
            toaster.dismiss(loadingToast)
        } else {
            try {
                await axios(config)
                toaster.success('Email sent successfully')
                reset()
                toaster.dismiss(loadingToast)
            } catch (err: any) {
                toaster.error(err.message)
                toaster.dismiss(loadingToast)
            }
        }
    }

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = event.target.value
        setLetterCount(message.length)
    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <StarsContainer className="h-auto">
                <div className="space-y-5">
                    <Heading className="text-center text-3xl">Contact Me</Heading>
                    <form className="flex h-3/4 w-full flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-full justify-between gap-3">
                            <div className="w-1/2">
                                <input
                                    placeholder="Name"
                                    className="w-full"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            </div>
                            <div className="w-1/2">
                                <input
                                    placeholder="Email"
                                    className="w-full"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email format',
                                        },
                                    })}
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>
                        </div>

                        <textarea
                            placeholder="Message"
                            className="h-96 max-h-48"
                            {...register('message', {
                                required: 'Message is required',
                                maxLength: {
                                    value: 500,
                                    message: 'Message exceeds the maximum character limit of 500',
                                },
                            })}
                            onChange={handleMessageChange}
                        />
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                        <div className="text-sm text-gray-500">Character Count: {letterCount} / 500</div>
                        <Button type="submit" className="mx-auto w-full px-5 py-2 max-md:w-3/4">
                            Submit
                        </Button>
                    </form>
                </div>
            </StarsContainer>
        </div>
    )
}

export default ContactContainer
