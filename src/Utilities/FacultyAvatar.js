import React from 'react'
import { Avatar } from 'react-toolbox'
import { faculty as Images } from '../images'

const FacultyAvatar = name => {
  if (name === 'Amotz Bar-Noy')
    return <Avatar title={name[0]} image={Images.AmotzBarNoy} />
  if (name === 'Felisa Vázquez-Abad')
    return <Avatar title={name[0]} image={Images.FelisaVazquezAbad} />
  if (name === 'Ted Brown')
    return <Avatar title={name[0]} image={Images.TedBrown} />
  if (name === 'Saad Mneimneh')
    return <Avatar title={name[0]} image={Images.SaadMneimneh} />
  return <Avatar title={name[0]} />
}

export default FacultyAvatar
