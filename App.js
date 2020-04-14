import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }
    
    setTodos(prev => [...prev, newTodo]); // prev - previos state todos
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <Navbar title="ToDo App"/>
      <View style={styles.wrapper}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item})=>{
            return <Todo todo={item} onRemove={removeTodo}/>
          }}
        />

        {/* <ScrollView style={{paddingBottom: 20}}>
          {
            todos.map(item => {
              return <Todo key={item.id} todo={item}/>
            })
          }
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 60
  },
  wrapper: {
    padding: 20,
    height: '100%'
  }
});
