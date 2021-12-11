
import linkedin from './icones/linkedin.png'
import github from './icones/github.png'
import email from './icones/email.png'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.scss';


export const Perfil = () => {
    const [profiles, setProfiles] = useState()

    const getProfiles = async () => {
        const response = await api.get('/profiles')
        setProfiles(response.data)

    }
    useEffect(() => {
        getProfiles()
    }, [])

    console.log(profiles)

    return (
        <section id="section-profile">    
        {
            profiles?.map(
                ({ id, fullName, urlGit, urlLinkedin, urlPhoto, mail }) => {
                    return(
                        <article key={id}>
                            <div className='perfil-container'>

                                <img id="img-photo" src={urlPhoto} />

                                <h3>{fullName}</h3>

                                <div className='icones'>

                                    <a href={urlGit} target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
                                    <a href={urlLinkedin} target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                                    <a href={mail} target="_blank" rel="noreferrer"><img src={email} alt="email"/></a>
                                    <Link to={`/profiles`}></Link>

                                </div>
                            </div>
                        </article>
                    )    
                    

                }
            )
       
        }

        </section>

    )
};



const Sobre = () => {

    return (
        <div id="main">

            <div className="text">
                <h1> Equipe </h1>
                <p>
                    Nosso grupo é composto por um conjunto de alunos juniores do curso Certified Tech Developer da Digital House Coding School.
                    Desenvolvemos este projeto avaliativo sob a mentoria dos nossos professores das materias de Back end, Front End e Infraestrutura, com intuito de aprimorar nossos conhecimentos adquiridos em sala de aula.
                    Utilizamos metodologias ageis para nos organizar e propor uma solucao em linha com requisitos solicitados.
                </p>
            </div>
            <Perfil />
        </div>
    )
}

export default Sobre;
