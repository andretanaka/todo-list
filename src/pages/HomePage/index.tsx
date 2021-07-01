import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import getTodosList from 'redux/effects/Todos'
import { ITodo } from 'redux/types/TodoTypes'

import { createTodoService, getTodoService } from 'services'

import { Text, InputText } from 'components/atoms'
import { LabelValue, ModalCard } from 'components/molecules'
import { Loading, TodosList } from 'components/organisms'

import * as s from './styles'

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<ITodo>({
    id: 0,
    name: '',
    completed: false,
    inserted_at: '',
    updated_at: '',
  })
  const [todoId, setTodoId] = useState('')
  const [todoName, setTodoName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ title: '', message: '' })

  const addTodo = (name: string) => {
    setIsLoading(true)
    setHasError(false)
    createTodoService(name)
      .then(() => dispatch(getTodosList()))
      .catch(() => {
        setIsOpen(true)
        setHasError(true)
        setErrorMessage({
          title: 'Desculpe o inconveniente...',
          message:
            'Estamos com uma instabilidade. Por favor, tente mais tarde.',
        })
      })
      .finally(() => setIsLoading(false))
  }

  const onClickSearchHandler = (searchedId: number) => {
    setIsLoading(true)
    setHasError(false)
    getTodoService(searchedId)
      .then((response) => {
        setIsOpen(true)
        setTodo(response)
      })
      .catch(({ response }) => {
        setIsOpen(true)
        setHasError(true)
        if (response.status === 404) {
          setErrorMessage({
            title: 'Opsy...',
            message: 'To-do não encontrado.',
          })
        } else {
          setErrorMessage({
            title: 'Desculpe o inconveniente...',
            message:
              'Estamos com uma instabilidade. Por favor, tente mais tarde.',
          })
        }
      })
      .finally(() => setIsLoading(false))
  }

  const modalContent = () => {
    if (hasError) return <>{errorMessage.message}</>
    return (
      <>
        <LabelValue label="ID:" value={`${todo.id}`} />
        <LabelValue label="Nome:" value={`${todo.name}`} />
        <LabelValue
          label="Status:"
          value={`${todo.completed ? `Completo` : `Pendente`}`}
        />
      </>
    )
  }

  useEffect(() => {
    dispatch(getTodosList())
  }, [dispatch])

  return (
    <>
      <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      <ModalCard
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={hasError ? errorMessage.title : 'Informações do to-do'}
      >
        {modalContent()}
      </ModalCard>
      <s.Container>
        <s.Wrapper>
          <s.Title>Lista de To-Dos</s.Title>
          <s.InputsWrapper>
            <div>
              <Text>Adicionar novo To-Do</Text>
              <InputText
                value={todoName}
                onChangeHandler={setTodoName}
                icon="add"
                onClickImage={() => addTodo(todoName)}
                placeholder="Digite o nome do to-do"
              />
            </div>
            <s.SearchWrapper>
              <Text>Procurar To-Do</Text>
              <InputText
                value={todoId}
                onChangeHandler={setTodoId}
                icon="search"
                placeholder="Digite o id do to-do"
                onClickImage={() => onClickSearchHandler(+todoId)}
              />
            </s.SearchWrapper>
          </s.InputsWrapper>
          <TodosList />
        </s.Wrapper>
      </s.Container>
    </>
  )
}

export default HomePage
