import React from 'react'
import './services.css' //Position of responsibility
import { BsCheckAll } from "react-icons/bs";  

const Services = () => {
  return (
    <section id='services'>
      <h5>Here's my</h5>
      <h2>Exprience</h2>

      <div className="container services_container">

        <article className='service'>
          <div className="service_head">
            <h3>Public Relations Officer</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p> Successfully managed PR strategies and media communications, enhancing organizational image, increasing
            stakeholder engagement by 40%, and boosting media coverage by 25%</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Coordinated with the principal and HOD to secure permissions for the offline conduction of events</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3> Deep Learning Engineer– Intern</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Led text extraction projects, implementing end-to-end pipelines to extract insights from the unstructured data</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Optimized hyperparameters and fine-tuned model architectures</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Implemented data augmentation techniques on images expanding the model’s accuracy</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Implemented RAG model using Langchain, utilizing the Google GenAI Embeddings </p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Google DSC Lead at PVGCOET</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckAll />
            <p>Interviewed 80 candidates, selected a core team of 5 and a committee of 20</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Addressed 250+ students in the induction program, resulting in a 54% increase in community membership</p>
            </li>
            <li>
            <BsCheckAll />
            <p>Directed Ideathon3.0 (flagship event), with a 160% increase in participation compared to previous editions</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services