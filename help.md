Зверніть увагу на основні пункти під час виконання ДЗ: Для сторінок створена
папкa pages на рівні з components Під час сабміту форми обов’язково записувати
слово для пошуку в параметри рядка запиту, сама форма повинна бути в окремому
компоненті. const handleSubmit= value => { setSearchParams({ query: value }); };

На сторінках Movies, Cast, Reviews в масиві залежностей повинен бути id фільма
який ми отримали з рядка запиту const { movieId } = useParams(); useEffect(() =>
{ if (!movieId) return; }, [movieId]);

Коли додаємо функціонал кнопки повернення назад, перевіряти, що точно є значення
from в location.state const location = useLocation(); const backLink =
location.state?.from ?? '/';

Якщо з бека не прийшли фото акторів або постер, поставити дефолтну каритнку
const defaultImg =
'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

<img src={ movieData.poster_path ?
`https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : defaultImg }
width={250} alt="poster" />

Створення списку фільмів на сторінках Home, Movies виносимо в окремий компонент
MoviesList.
