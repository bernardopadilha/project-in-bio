import { TRIAL_DAYS } from '@/app/lib/config'
import Button from '../ui/button'

export default function Pricing() {
  return (
    <div className="my-20 md:my-[150px] flex flex-col items-center gap-14 px-5">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white text-center md:text-start">
          Um valor acessível para todos
        </h3>
        <p className="text-content-body text-xl text-center">
          Junte-se a comunidade de criadores profissionais que já estão elevando
          sua <br className="hidden md:block" /> presença on-line.{' '}
          <br className="md:hidden" /> Teste por{' '}
          <strong className="text-accent-pink">{TRIAL_DAYS} dias</strong>, sem
          compromisso
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-end gap-9">
        <div className="w-[304px] p-8 flex flex-col gap-7 rounded-[48px] border border-[#1E1E1E]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl">Mensal</span>
            <span className="text-content-body">Apenas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">R$ 9,90</span>
            <span className="text-content-headline text-2xl">/mês</span>
          </div>
          <Button variant="secondary">Assinar</Button>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-t-2xl w-[304px] bg-[linear-gradient(90deg,#4d2dbb_0%,#b5446b_100%)]">
            <span className="uppercase text-xs font-bold">Recomendado</span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#4d2dbb_0%,#b5446b_100%)] rounded-b-2xl flex items-center justify-center">
            <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Vitalício</span>
                <span className="text-content-body">Economize com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-2xl">R$ 99,90</span>
                <span className="text-content-headline text-2xl">/mês</span>
              </div>
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
