import { ProfileUpdateDto } from '@/api/dto/profile';
import { get, patch } from '@/api';

export const profileUpdate = (profileUpdateDto: ProfileUpdateDto) => patch('/me', profileUpdateDto);

export const profileData = () => get('/me');
