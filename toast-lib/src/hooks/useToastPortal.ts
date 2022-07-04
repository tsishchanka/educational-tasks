
import  { useState, useEffect } from 'react';

import { uuid } from '../helpers';

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;

    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return () => {document.getElementsByTagName('body')[0].removeChild(div);};
  }, [portalId]);

  return { loaded, portalId };
};
