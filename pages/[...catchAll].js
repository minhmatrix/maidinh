import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CatchAllPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Thay thế bằng URL mà bạn muốn chuyển hướng đến
    window.location.href = 'https://facebook.com/';
  }, []);

  return null; // Hoặc bạn có thể trả về một component đơn giản nếu cần
};

export default CatchAllPage;
