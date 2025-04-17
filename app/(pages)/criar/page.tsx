import Header from '@/app/components/landing-page/header'
import Button from '@/app/components/ui/button'
import Input from '@/app/components/ui/input'
import { RocketIcon } from 'lucide-react'
import React from 'react'

export default function CreatePage() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-bold text-white">Escolha seu link</h2>
          <RocketIcon className="size-10" />
        </div>
        <form className="w-full flex items-center gap-2">
          <span className="text-white">projectin.bio</span>
          <Input />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  )
}
