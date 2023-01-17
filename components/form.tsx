import cn from 'classnames';
import { useRouter } from 'next/router';

import styleUtils from './utils.module.css';
import styles from './form.module.css';

export default function Form() {
  const router = useRouter();
  // await router.replace(`/?${queryString}`, '/');
  const handleSubmit = async () => {
    await router.replace(`/stage/a`);
  };

  return (
    <div style={{ display: 'flex', paddingBottom: '10px', justifyContent: 'center' }}>
      <button
        className={cn(styles.submit, styleUtils.appear, styleUtils['appear-fourth'])}
        onClick={handleSubmit}
      >
        <>Watch Event</>
      </button>
    </div>
  );
}
