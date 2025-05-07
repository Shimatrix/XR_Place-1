import React, { useEffect, useState, useCallback } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import style from './ModalDemo.module.css';
import { UIButton } from '../ui/button/button';
import done from '../../assets/images/done.svg';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      newErrors.phone = t('errors.phone');
    }

    if (!/^https:\/\/t\.me\/[a-zA-Z0-9_]{5,}$/.test(data.telegram)) {
      newErrors.telegram = t('errors.telegram');
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = t('errors.email');
    }

    if (!data.name.trim()) {
      newErrors.name = t('errors.name');
    }

    if (!data.agree) {
      newErrors.agree = t('errors.agree');
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
              <h3 className={style.title}>{t('modal2.title')}</h3>
              <div className={style.thankYouText}>
                <p>{t('modal2.text')}</p>
              </div>
            </div>
            <div className={style.thankYouButtons}>
              <UIButton
                text={t('modal2.button')}
                onClick={() => (window.location.href = '/')}
                className={style.homeButton}
              />
            </div>
          </div>
        ) : (
          <div className={style.mainBlock}>
            <div className={style.blockTitle}>
              <h3 className={style.title}>{t('modal1.title')}</h3>
              <p className={style.description}>{t('modal1.description')}</p>
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
                      placeholder='Email'
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
                      placeholder={t('modal1.namePlaceholder')}
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
                  {t('modal1.checkbox').split('Политики')[0]}
                  <a href='#' className={style.link}>
                    Политики обработки персональных данных
                  </a>
                </label>
              </div>
              {touched.agree && errors.agree && (
                <span className={style.error}>{errors.agree}</span>
              )}

              <UIButton
                text={t('modal1.button')}
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
