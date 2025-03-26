import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  it('Displays the company name component', () => {
    render(MainNav)
    const companyName = screen.getByText('Dundung')
    expect(companyName).toBeInTheDocument()
  })
  it('Displays Menu items for nav', () => {
    render(MainNav)
    const navMenuItems = screen.getAllByRole('listitem')
    const navMenuItemsText = navMenuItems.map((item) => item.textContent)
    expect(navMenuItemsText).toEqual([
      'Teams',
      'Locations',
      'Life of Dundung',
      'How we hire',
      'Students',
      'Jobs',
    ])
  })
  describe('when the user login in ', () => {
    it('Displays the user profile picture', async() => {
      render(MainNav)
      const profileImage = screen.queryByRole('img', {
        name: /userprofileImage/i,
      })
      expect(profileImage).not.toBeInTheDocument()

      const LoginButton = screen.getByRole('button', {
        name:/Sign in/i,
      })

      await userEvent.click(LoginButton)
    })
  })
})
