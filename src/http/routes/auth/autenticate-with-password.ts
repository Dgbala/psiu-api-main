import { db } from '@database/client'
import { checkPassword } from '@ulib/bcrypt'
import { Request, Response } from 'express'

export async function authenticateWithPassoword(
  request: Request,
  response: Response,
): Promise<void>{
  const { ra, password } = request.body as Body

  const student = db.findUnique('students', { ra })

  if (!student) {
    response.status(401).json({
      result: 'error',
      message: 'RA or password incorrects',
    })

    return
  }

  const passwordMatch = await checkPassword(password, student.passwordHash)

  response.json({
    passwordMatch,
  })
}
