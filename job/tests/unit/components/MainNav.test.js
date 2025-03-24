import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, it } from 'vitest'

describe('MainNav', () => {
  it('Displays the company name component', () => {
    render(MainNav)
    const companyName = screen.getByText('Dundung')
    expect(companyName).toBeInTheDocument()
  })
  it('Displays Menu items for nav', () => {
    render(MainNav)
  const navMenuItems=screen.getAllByRole("listitem");
  const navMenuItemsText=navMenuItems.map((item)=>item.textContent);
  expect(navMenuItemsText).toEqual(["Teams","Locations","Life of Dundung","How we hire","Students",'Jobs']);
  })
})
