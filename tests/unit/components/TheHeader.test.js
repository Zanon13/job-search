import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import TheHeader from '@/components/TheHeader.vue'
import { expect } from 'vitest'

describe('TheHeader', () => {
  it('renderiza o nome da companhia', () => {
    render(TheHeader)
    const companyName = screen.getByText('Xumingo Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('renderiza itens do menu', () => {
    render(TheHeader)
    const menuItems = screen.getAllByRole('listitem')
    const menuItemsText = menuItems.map((item) => item.textContent)
    expect(menuItemsText).toEqual([
      'Times',
      'Locais',
      'Vida na Xumingo',
      'Como contratamos',
      'Estudantes',
      'Empregos'
    ])
  })

  describe('quando o usuário clica no botão de login', () => {
    it('renderiza o imagem de perfil', async () => {
      render(TheHeader)
      let profileImage = screen.queryByRole('img', {
        name: /Imagem de perfil do usuário/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /Entrar/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /Imagem de perfil do usuário/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
