import React from 'react'
import './Footer.scss'

export function Footer () {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categorías</h1>
          <span>Dama</span>
          <span>Caballero</span>
          <span>Zapatos</span>
          <span>Accesorios</span>
          <span>Lo nuevo</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Páginas</span>
          <span>Tiendas</span>
          <span>Comparar</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>Nosotros</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className='item'>
          <h1>Contacto</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>TIENDITA</span>
          <span className='copyright'>
            © Copyright 2023. Algunos derechos reservados.
          </span>
        </div>
        <div className='right'>
          <img src='./img/payment.png' alt='' />
        </div>
      </div>
    </div>
  )
}
