import { render, screen } from '@testing-library/vue'

import TheHeader from '@/components/TheHeader.vue'

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
})
