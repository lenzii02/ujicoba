"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z
    .string()
    .min(8, { message: "Password setidaknya memiliki 8 karakter" })
    .max(72, { message: "Password tidak boleh lebih dari 72 karakter" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <main className="h-screen flex items-center justify-center bg-slate-100/50">
      <Card className="w-2/5 p-10 pt-6">
        <CardHeader className="text-center items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={60}
            className="mx-auto mb-0"
          />
          <CardTitle className="text-xl">Selamat Datang</CardTitle>
          <CardDescription className="text-sm">
            Silahkan masuk untuk melanjutkan
          </CardDescription>
        </CardHeader>{" "}
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="input w-full"
                        placeholder="Masukkan email anda..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Kata sandi</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        className="input w-full"
                        placeholder="Masukkan kata sandi anda..."
                      />
                    </FormControl>
                    <FormDescription>
                      <Link
                        href="#"
                        className="text-xs text-slate-600 hover:underline"
                      >
                        Lupa kata sandi?
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" className="w-full">
                  Masuk
                </Button>
                <small className="mx-auto text-xs">
                  Belum punya akun?{" "}
                  <Link
                    href="/register"
                    className="text-primary hover:underline"
                  >
                    Daftar disini
                  </Link>
                </small>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
