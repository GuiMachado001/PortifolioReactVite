import React from 'react';

function Conhecimento({ title, items, icons }) {
    return (
        <div className="glass-card knowledge-card"
             data-aos="fade-up"
             data-aos-offset="50" 
             data-aos-duration="1000">
            
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            
            <div className="card-body">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="card-footer">
                {icons.map((iconClass, index) => (
                    <i key={index} className={iconClass}></i>
                ))}
            </div>
        </div>
    );
}

export default Conhecimento;