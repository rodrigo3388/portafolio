import React from 'react'

const Cv = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <hr/>
          <a className='btn btn-dark btn-lg text-end' href={require('../../media/cv.pdf')}
                    download="cv.pdf"
                    >Descargar cv</a>
                  
    </div>
  )
}

export default Cv