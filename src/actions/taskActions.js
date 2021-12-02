//////////////////////////////////////  ACTIONS DIPSONOBLES SUR LES TACHES /////////////////////////

import { getFirebase } from "react-redux-firebase";

//Enregistrement d'une nouvelle Tâche
export const addTask = (task) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("tasks")
            .add({
                ...task,
                date: new Date(),
            })
            .then(() => {
                dispatch({
                    type: "ADD_TASK",
                    task,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "ADD_TASK_ERR",
                    err,
                });
            });
    };
};


export const removeTask = task => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection("tasks")
            .doc(task.id)
            .delete()
            .then(() => {
                dispatch({
                    type: "REMOVE_TASK",
                });
            })
            .catch(err => {
                dispatch({
                    type: "REMOVE_TASK_ERR",
                    err
                });
            });
    } 
};


export const toggleChecked = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
  
      firestore
        .collection("tasks")
        .doc(task.id)
        .set(
          {
            ...task,
            checked: !task.checked,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "TOGGLE_CHECKED",
            task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "TOGGLE_CHECKED_ERR",
            err,
          });
        });
    };
  };