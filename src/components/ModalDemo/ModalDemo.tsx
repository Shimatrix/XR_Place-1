import React, { useEffect, useState, useCallback } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
      setErrors({});
      setTouched({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};

    if (!data.phone || !isValidPhoneNumber(data.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!/^https:\/\/t\.me\/[a-zA-Z0-9_]{5,}$/.test(data.telegram)) {
      newErrors.telegram = 'Введите корректную ссылку на Telegram';
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!data.name.trim()) {
      newErrors.name = 'Введите имя';
    }

    if (!data.agree) {
      newErrors.agree = 'Необходимо согласие';
    }

    return newErrors;
  };

  useEffect(() => {
    const currentErrors = validate(formData);
    setIsValid(Object.keys(currentErrors).length === 0);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    const updatedData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    } as FormData;

    setFormData(updatedData);
    setTouched((prev) => ({ ...prev, [name]: true }));

    const validationErrors = validate(updatedData);
    setErrors(validationErrors);
  };

  const handlePhoneChange = (value?: string) => {
    const updatedData = { ...formData, phone: value || '' };
    setFormData(updatedData);
    setTouched((prev) => ({ ...prev, phone: true }));
    setErrors(validate(updatedData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      telegram: true,
      agree: true
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
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
                <p>Мы свяжемся с вами в ближайшее время.</p>
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
                Используйте наш инновационный виджет для создания виртуальных
                туров.
              </p>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.inputBlock}>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <PhoneInput
                      name='phone'
                      defaultCountry='RU'
                      placeholder='+ _ ( __ ) ___  __  -  __'
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={style.input}
                    />
                    {touched.phone && errors.phone && (
                      <span className={style.error}>{errors.phone}</span>
                    )}
                  </div>
                  <div className={style.inputGroup}>
                    <input
                      type='text'
                      name='telegram'
                      value={formData.telegram}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='https://t.me/username'
                    />
                    {touched.telegram && errors.telegram && (
                      <span className={style.error}>{errors.telegram}</span>
                    )}
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='email'
                    />
                    {touched.email && errors.email && (
                      <span className={style.error}>{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className={style.row}>
                  <div className={style.inputGroup}>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className={style.input}
                      placeholder='Как вас зовут'
                    />
                    {touched.name && errors.name && (
                      <span className={style.error}>{errors.name}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className={style.checkboxRow}>
                <input
                  type='checkbox'
                  name='agree'
                  checked={formData.agree}
                  onChange={handleInputChange}
                  className={style.checkbox}
                />
                <label htmlFor='agree' className={style.checkboxLabel}>
                  Я принимаю условия{' '}
                  <a href='#' className={style.link}>
                    Политики обработки персональных данных
                  </a>
                </label>
              </div>
              {touched.agree && errors.agree && (
                <span className={style.error}>{errors.agree}</span>
              )}

              <UIButton
                text='отправить данные'
                type='submit'
                className={style.button_demo}
                disabled={!isValid}
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
