import React from 'react'
import Counter from './hooks/usestate/Counter'
import UseState2 from './hooks/usestate/UseState2'
import UseState3 from './hooks/usestate/UseState3'
import MyComp from './hooks/useeffect/MyComp'
import EffectCounter from './hooks/useeffect/EffectCounter'
import NewComp from './hooks/usecontext/NewComp'
import UserProvider from './hooks/usecontext/UserProvider'
import MyForm from './hooks/formvalidation/MyForm'
import FormValidation from './hooks/formvalidation/FormValidation'
import HookForm from './hooks/formvalidation/HookForm'
import Color from './hooks/usestate/Color'
import NameProvider from './hooks/usecontext/NameProvider'
import BatchProvider from './hooks/BatchProvider'
import ExternalComponent from './hooks/ExternalComponent'
import UseReducerCounter from './hooks/usereducer/UseReducerCounter'

const App = () => {
  return (
    <div>
      {/* <Counter />
      <UseState2 />
      <UseState3 />
      <MyComp />
      <EffectCounter />
      <NewComp /> */}
    {/* <MyForm />
      <UserProvider /> */}
      {/* <FormValidation /> */}
{/* <HookForm/> */}
{/* <Color/>
<NameProvider /> */}
<ExternalComponent />
<UseReducerCounter />

    </div>
  )
}

export default App

