'use server'

export type InquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'name' | 'email' | 'institution' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const institution = String(formData.get('institution') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: InquiryState['errors'] = {}
  if (name.length < 2 || name.length > 120) errors.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Please enter a valid email address.'
  if (institution.length < 2 || institution.length > 200) errors.institution = 'Please enter your institution.'
  if (message.length < 10 || message.length > 5000)
    errors.message = 'Please share a few details about your course idea (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please correct the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: `Thank you, ${name}. Our academic team will follow up at ${email} within two business days with the full partner kit.`,
  }
}
