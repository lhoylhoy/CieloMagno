import { useState, type FormEvent } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Form from '@radix-ui/react-form'
import { Check, CheckCircle2, Loader2, Megaphone, ShieldCheck } from 'lucide-react'
import { campaign } from '../data/campaignData'
import { cn } from '../lib/cn'

type SignupStatus = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'min-h-[44px] rounded-xl border border-line/25 bg-canvas px-3 py-2.5 text-[0.9375rem] text-ink outline-none transition placeholder:text-muted/80 focus:border-crimson/60 focus-visible:ring-2 focus-visible:ring-crimson/20 data-[invalid]:border-crimson'
const errorClass = 'text-[0.75rem] font-semibold text-crimson'

export function CampaignSignup() {
  const [status, setStatus] = useState<SignupStatus>('idle')
  const [consent, setConsent] = useState(false)

  const isPublic =
    campaign.publicRelease && campaign.authorized && campaign.candidateConfirmed

  if (!isPublic || !campaign.formEndpoint) {
    return (
      <p className="mt-4 flex items-start gap-2 text-[0.75rem] leading-[1.65] text-muted/80">
        <Megaphone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson" aria-hidden="true" />
        Campus and community chapters are organizing nationwide. Use the discussion kit above
        or reach out through the Open Channel below to connect your group with the campaign desk.
      </p>
    )
  }

  const consentError = status === 'error' && !consent

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      campus: String(data.get('campus') ?? '').trim(),
      consent,
    }

    if (!payload.consent) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(campaign.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Signup failed')
      form.reset()
      setConsent(false)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Form.Root onSubmit={handleSubmit} className="mt-5 rounded-2xl border border-line/30 bg-panel p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Megaphone className="h-4 w-4 text-crimson" aria-hidden="true" />
        <span className="label-mono text-muted">Join the first wave</span>
      </div>
      <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
        Leave a way to reach you. We will only use it for campaign updates.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Form.Field name="name" className="flex flex-col gap-1.5">
          <Form.Label className="text-[0.75rem] font-semibold text-muted">Name</Form.Label>
          <Form.Control
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
          <Form.Message match="valueMissing" className={errorClass}>
            Please tell us your name.
          </Form.Message>
        </Form.Field>

        <Form.Field name="email" className="flex flex-col gap-1.5">
          <Form.Label className="text-[0.75rem] font-semibold text-muted">Email</Form.Label>
          <Form.Control
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
          <Form.Message match="valueMissing" className={errorClass}>
            Please enter your email.
          </Form.Message>
          <Form.Message match="typeMismatch" className={errorClass}>
            That doesn’t look like a valid email.
          </Form.Message>
        </Form.Field>

        <Form.Field name="campus" className="flex flex-col gap-1.5 sm:col-span-2">
          <Form.Label className="text-[0.75rem] font-semibold text-muted">Campus or city</Form.Label>
          <Form.Control
            autoComplete="address-level2"
            className={inputClass}
            placeholder="UP Diliman, Quezon City, etc."
          />
        </Form.Field>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <Checkbox.Root
          id="signup-consent"
          checked={consent}
          onCheckedChange={(next) => {
            setConsent(next === true)
            if (next === true && status === 'error') setStatus('idle')
          }}
          aria-describedby={consentError ? 'signup-consent-error' : undefined}
          className="relative mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[5px] border border-line/50 bg-canvas outline-none transition before:absolute before:-inset-3 before:content-[''] focus-visible:ring-2 focus-visible:ring-crimson/35 data-[state=checked]:border-crimson data-[state=checked]:bg-crimson"
        >
          <Checkbox.Indicator>
            <Check className="h-3 w-3 text-on-crimson" aria-hidden="true" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="signup-consent" className="text-[0.8125rem] leading-[1.6] text-muted">
          I agree to be contacted about the campaign. I can ask to be removed at any time.
        </label>
      </div>
      {consentError ? (
        <p id="signup-consent-error" className={cn(errorClass, 'mt-1.5')}>
          Please tick the box so we know you’re happy to be contacted.
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Form.Submit asChild>
          <button type="submit" disabled={status === 'submitting'} className="btn btn-accent btn-sm disabled:opacity-60">
            {status === 'submitting' ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            ) : (
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            {status === 'submitting' ? 'Sending…' : 'Join the wave'}
          </button>
        </Form.Submit>
        <p className="text-[0.75rem] text-muted/80">No data is collected without this form.</p>
      </div>

      {status === 'success' ? (
        <p className="mt-3 flex items-center gap-2 rounded-xl border border-emerald/25 bg-emerald/5 p-3.5 text-[0.8125rem] leading-[1.55] text-ink" aria-live="polite">
          <CheckCircle2 className="h-4 w-4 text-emerald" aria-hidden="true" />
          You’re on the list. Thank you.
        </p>
      ) : null}
      {status === 'error' && consent ? (
        <p className="mt-3 rounded-xl border border-crimson/25 bg-crimson/5 p-3.5 text-[0.8125rem] leading-[1.55] text-ink" aria-live="polite">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </Form.Root>
  )
}
