import { render, screen, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import Homepage from '../pages/Homepage';

describe('Testando a homepage', () => {
  test('Testar se o botão com o texto "Quero saber mais" redireciona para a rota "https://www.spacex.com" ', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByRole('link', {
      name: /quero saber mais/i,
    }));
    const { pathname } = history.location;
    expect(pathname).toBe('https://www.spacex.com');
  });
  test('Testar se existe um heading com o texto inicial', () => {
    render(<Homepage />);
    const initialText = screen.getByText(/uma plataforma onde você consegue/i);
    expect(initialText).toBeInTheDocument();
  });
  test('Verifica se existe um h3 na página', () => {
    render(<Homepage />);
    const titleH3 = screen.getByRole('heading', {
      name: /uma plataforma onde você consegue/i,
    });
    expect(titleH3).toBeInTheDocument();
  });
});
