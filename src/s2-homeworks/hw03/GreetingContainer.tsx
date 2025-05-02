import React, { useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name : string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    // Trim the name to remove leading and trailing whitespace
    const trimmedName = name.trim()
    
    // Check if the trimmed name is empty
    if(!trimmedName){
        setError('Введите корректное имя')
    } else {
        addUserCallback(trimmedName)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}


export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    if(!name) {
        setError('Введите корректное имя')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e:  React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if(e.key === 'Enter'){
        addUser()
    }
    // если нажата кнопка Enter - добавить

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer= ({
    addUserCallback,
    users
}: GreetingContainerPropsType) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        
        // Clear error as soon as user starts typing
        setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName: string | undefined = users[users.length - 1]?.name ?? undefined// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
