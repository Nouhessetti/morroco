import './Secondary.css'

export default function Secondary(Data){
    return (
        <div className='secondary_container'>
            <h2>The Latest Articles</h2>
            {Data.Data.Data.slice(0,4).map((item, index)=>(
              <div key={index} className='ssecondary_latest_container'>
                    <img src={item.img} alt='ssecondary_latest' />
                
                    <h4>{item.title}</h4>
                     
              </div>)
                )}

        </div>
    )
}