import React from 'react'
import { Avatar } from 'react-toolbox'
import { faculty as Images } from '../images'

const FacultyAvatar = name => {
  if (name === 'Alexey Nikolaev') {
    return <Avatar title={name[0]} image={Images.AlexeyNikolaev} />
  }
  return <Avatar title={name[0]} />
}

export default FacultyAvatar
