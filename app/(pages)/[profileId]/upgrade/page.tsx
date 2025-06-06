import Header from '@/app/components/landing-page/header'
import Button from '@/app/components/ui/button'
import React from 'react'

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex gap-4">
        <Button>R$ 9,90 /mês</Button>
        <Button>R$ 99,90 vitalício</Button>
      </div>
    </div>
  )
}
