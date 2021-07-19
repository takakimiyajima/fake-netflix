import { useEffect, useState } from 'react'
import './Nav.scss'

type Props = {
  className?: string
}

export const Nav = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleIsVisible = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false)
    };

    /** when mounted */
    window.addEventListener('scroll', handleIsVisible)

    /** when unmounted */
    return () => {
      window.removeEventListener('scroll', handleIsVisible)
    }
  }, [])

  return (
    <div className={`Nav ${isVisible && "Nav-black"}}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}
