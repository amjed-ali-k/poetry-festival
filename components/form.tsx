
import { useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import styleUtils from './utils.module.css';
import styles from './form.module.css';


type Props = {
  sharePage?: boolean;
};

export default function Form({ sharePage }: Props) {
  const router = useRouter();
          // await router.replace(`/?${queryString}`, '/');
  const handleSubmit = async () => {
    await router.replace(`/stage/a`);
  }
      
  return  (
    <div style={{display: "flex", paddingBottom: "10px", justifyContent: 'center'}}> 
        <button
          className={cn(styles.submit,styleUtils.appear, styleUtils['appear-fourth'],)}
          onClick={handleSubmit}
        >
           <>Watch Event</>
        </button>
    </div>
  
     
  );
}
