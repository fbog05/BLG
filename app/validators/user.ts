import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).trim(),
    last_name: vine.string().minLength(3).trim(),
    email: vine.string().email().trim(),
    password: vine
      .string()
      .minLength(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
      .confirmed(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().trim(),
    password: vine.string(),
  })
)

registerValidator.messagesProvider = new SimpleMessagesProvider({
  'first_name.required': 'A keresztnév megadása kötelező',
  'first_name.string': 'A keresztnévnek szövegnek kell lennie',
  'first_name.minLength': 'A keresztnévnek tartalmaznia kell minimum {{ min }} karaktert',
  'last_name.required': 'A vezetéknév megadása kötelező',
  'last_name.string': 'A vezetéknévnek szövegnek kell lennie',
  'last_name.minLength': 'A vezetéknévnek tartalmaznia kell minimum {{ min }} karaktert',
  'email.required': 'Az email cím megadása kötelező',
  'email.string': 'Az email címnek szövegnek kell lennie',
  'email.email': 'Az email cím formátuma nem megfelelő',
  'password.required': 'A jelszó megadása kötelező',
  'password.string': 'A jelszónak szövegnek kell lennie',
  'password.minLength': 'A jelszónak tartalmaznia kell minimum {{ min }} karaktert',
  'password.regex':
    'A jelszónak tartalmaznia kell minimum egy kisbetűt, egy nagybetűt és egy számot',
  'password.confirmed': 'A jelszavak nem egyeznek meg',
})

loginValidator.messagesProvider = new SimpleMessagesProvider({
  'email.required': 'Az email cím megadása kötelező',
  'email.string': 'Az email címnek szövegnek kell lennie',
  'password.required': 'A jelszó megadása kötelező',
  'password.string': 'A jelszónak szövegnek kell lennie',
})
