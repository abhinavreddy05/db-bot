import React from 'react'
import { CopyBlock, nord } from 'react-code-blocks';

import botsearch from '../assets/botsearch.svg'
import error from '../assets/error.svg'

function Sqlbar() {

  const code = `
  SELECT column_name(s)
  FROM table_name
  ORDER BY column_name(s)
  FETCH FIRST number ROWS ONLY;

  SELECT column_name(s)
  FROM table_name
  ORDER BY column_name(s)
  FETCH FIRST number ROWS ONLY;

  SELECT column_name(s)
  FROM table_name
  ORDER BY column_name(s)
  FETCH FIRST number ROWS ONLY;

  SELECT column_name(s)
  FROM table_name
  ORDER BY column_name(s)
  FETCH FIRST number ROWS ONLY;
  `

  return (
    <div className='overflow-scroll'>
        <div>
          <span className="w-full grid grid-cols-3 gap-2 m-4">
            <span className='col-span-2 flex flex-col justify-center'>
              <h2 className='text-xl font-bold text-black'>SQL Query</h2>
              <p className=' text-gray-500 text-sm'>SQL query generated by the bot based on the prompt.</p>
            </span>
            <img className=' h-20 m-auto col-span-1' src={botsearch} alt=""/>
          </span>
          
          <CopyBlock
            customStyle={{marginTop: '1rem', marginBottom: '1rem', height: '400px', overflow: 'scroll',}}
            text={code}
            language="sql"
            showLineNumbers={false}
            theme={nord}
            wrapLongLines={true}
          />
        </div>

        <div className='overflow-scroll'>
          <span className="w-full grid grid-cols-3 gap-2 m-4 mb-2">
            <span className='col-span-2 flex flex-col justify-center'>
              <h2 className='text-xl font-bold text-black'>Errors</h2>
              <p className=' text-gray-500 text-sm'>Error message and status.</p>
            </span>
            <img className=' h-20 m-auto col-span-1' src={error} alt=""/>
          </span>

          <div role="alert" className="rounded p-4 px-6">
            <div className="flex items-center gap-2 text-red">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <strong className="block font-medium"> Something went wrong </strong>
            </div>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi assumenda numquam deserunt
              consectetur autem nihil quos debitis dolor culpa.
            </p>
          </div>
        </div>

    </div>
  )
}

export default Sqlbar
