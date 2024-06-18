// import './_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-wrapper">
          <p>Подпишитесь на рассылку и получайте информацию о выходе новых серий любимых сериалов и фильмов</p>
          <form className="form">
            <input type="text" />
            <input type="submit" />
          </form>
          <ul className='social-list'>
            <li className='social-list__item'><a href="#">VK</a></li>
            <li className='social-list__item'><a href="#">TG</a></li>
            <li className='social-list__item'><a href="#">FaceBook</a></li>
            <li className='social-list__item'><a href="#">Instagram</a></li>
            <li className='social-list__item'><a href="#">Youtube</a></li>
            <li className='social-list__item'><a href="#">Yandex</a></li>
          </ul>
          <p> © {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;