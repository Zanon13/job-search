import { render, screen } from '@testing-library/vue'

import ButtonAction from '@/components/ButtonAction.vue'

describe('ButtonAction', () => {
  it('renderiza o texto do botão', () => {
    render(ButtonAction, {
      props: {
        text: 'Teste',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', { name: /teste/i })
    expect(button).toBeInTheDocument()
  })
})
