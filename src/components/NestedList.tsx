// import React from 'react'
// import styles from 'NestedList.module.css'

export type NestedListProps<T> = {
  data: (T | T[])[]
  accessorFn: (data: T) => (string | string[]);
};

const NestedList = <T,>({ data, accessorFn }: NestedListProps<T>) => {

  return (
    <>
      <ul>
        {data.map(d => {
          if (Array.isArray(d)) {
            return (
              <ul>
                {d.map(sd => (
                  <li>{accessorFn(sd)}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{accessorFn(d)}</li>
            )
          }
        })}
      </ul>
    </>
  )
}

export default NestedList;