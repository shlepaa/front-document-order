import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button, DropMenu, Input } from '../components';
import { IEmployee } from '../interfaces/employee';
import styles from '../styles/Home.module.css';

export default function Home() {
	const {} = useForm<>();

	const employees: IEmployee[] = [
		{
			_id: '123',
			name: 'one',
			documents: [
				{ document: '1', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
		{
			_id: '321',
			name: 'two',
			documents: [
				{ document: '1', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
		{
			_id: '222',
			name: 'three',
			documents: [
				{ document: '1', _id: '1' },
				{ document: '1', _id: '1' },
			],
		},
	];
	return (
		<div className={styles.home}>
			<form className={styles.form}>
				<Input placeholder="Наименование документа" />
				<DropMenu
					defaultText="Выберите имя сотрудника"
					employees={employees}
				/>
				<Button>Добавить документ</Button>
			</form>
			<Link href="/table">
				<Button className={styles.button}>Перейти к таблице</Button>
			</Link>
		</div>
	);
}
