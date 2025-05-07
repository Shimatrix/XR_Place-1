import React, { useState, useEffect, useCallback } from 'react';
import style from './ModalDemo.module.css';
import { UIButton } from '../ui/button/button';
import done from '../../assets/images/done.svg';

interface FormData {
  name: string;
  email: string;
  phone: string;
  telegram: string;
  agree: boolean;
}

export const ModalWindow: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    agree: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        telegram: '',
        agree: false
      });
      setIsSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        {isSubmitted ? (
          <div className={style.thankYou}>
            <img className={style.done} src={done} alt='done' />
            <div className={style.thankYouTextBlock}>
              <h3 className={style.title}>спасибо за ваше доверие</h3>
              <div className={style.thankYouText}>
                <p>Контактные данные успешно отправлены.</p>
                <p>
                  Мы свяжемся с вами в ближайшее время, чтобы обсудить все
                  детали и ответить на вопросы.
                </p>
              </div>
            </div>
            <div className={style.thankYouButtons}>
              <UIButton
                text='На главную'
                onClick={() => (window.location.href = '/')}
                className={style.homeButton}
              />
            </div>
          </div>
        ) : (
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <h3 className={style.title}>
                Готовы поднять ваш бизнес на новый уровень?
              </h3>
              <p className={style.description}>
                Используйте наш инновационный виджет для создания захватывающих
                виртуальных туров и увеличьте интерес к вашим объектам.
              </p>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.inputBlock}>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='+ _ ( __ ) ___  __  -  __'
                      required
                    />
                  </div>
                  <div className={style.inputGroup}>
                    <input
                      type='text'
                      id='telegram'
                      name='telegram'
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='https://t.me/'
                      required
                    />
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='email'
                      required
                    />
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='Как вас зовут'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={style.checkboxRow}>
                <input
                  type='checkbox'
                  id='agree'
                  name='agree'
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className={style.checkbox}
                  required
                />
                <label htmlFor='agree' className={style.checkboxLabel}>
                  Я принимаю условия{' '}
                  <a href='#' className={style.link}>
                    Политики обработки персональных данных
                  </a>
                </label>
              </div>
              <UIButton
                text='отправить данные'
                type='submit'
                className={`${style.button_demo}`}
                disabled={!formData.agree}
              />
            </form>
            <button
              onClick={onClose}
              className={style.closeButton}
              aria-label='Закрыть модальное окно'
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
