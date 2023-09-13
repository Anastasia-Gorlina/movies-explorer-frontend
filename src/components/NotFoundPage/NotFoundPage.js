import { useNavigate, Link } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="NotFoundPage">
      <h3 className="NotFoundPage__title">404</h3>
      <p className="NotFoundPage__text">Страница  не найдена.</p>
      <a className="NotFoundPage__go-back link" onClick={() => navigate(-1)}>Назад</a>
    </section>
  );
}

export default NotFoundPage;