import '../components/VanillaJSONEditor.css';

import { useEffect, useRef } from 'react';

import Footer from './Footer';
import { JSONEditor } from 'vanilla-jsoneditor';

export const Layout: React.FC = ({ children }) => {
  const refContainer = useRef(null);
  const refEditor = useRef(null);
  useEffect(() => {
    // create editor
    console.log('create editor', refContainer.current);
    refEditor.current = new JSONEditor({
      target: refContainer.current,
      props: {},
    });

    return () => {
      // destroy editor
      if (refEditor.current) {
        console.log('destroy editor');
        // refEditor.current!.destroy();
        refEditor.current = null;
      }
    };
  }, []);
  // TODO:更新函数
  // useEffect(() => {
  // if (refEditor.current) {
  // console.log('update props', props);
  // refEditor.current.updateProps(props);
  // }
  // }, [props]);
  return (
    <div className='container-fluid'>
      <span>主页：packages/playground/src/layout/Layout.tsx</span>
      <div className='vanilla-jsoneditor-react' ref={refContainer}></div>
      {children}
      <Footer />
    </div>
  );
};
