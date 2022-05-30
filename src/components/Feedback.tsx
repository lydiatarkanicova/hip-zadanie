import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import database from '../Firebase';
import _ from 'lodash';

export interface IAnswer {
	answer: string;
	isCorrect?: boolean;
	ref?: any;
}

const Feedback = () => {
	const [sent, setSent] = useState(false);
	const [feedback, setFeedback] = useState({
		fieldOfStudy: '',
		subject: '',
		question: '',
		answer: '',
	});

	const updateInput = (e: any) => {
		setFeedback({
			...feedback,
			[e.target.name]: e.target.value,
		});
	};

	const addFeedback = async (e: any) => {
		e.preventDefault();
		try {
			const feedbackRef = await database.collection('feedback').add({
				fieldOfStudy: feedback.fieldOfStudy,
				subject: feedback.subject,
				question: feedback.question,
				answer: feedback.answer,
			});
		} catch (error: any) {
			alert(error.message);
		}
		setSent(true);
		setFeedback({
			fieldOfStudy: '',
			subject: '',
			question: '',
			answer: '',
		});
	};

	return (
		<>
			<h3>Spätná väzba</h3>
			<h4>Budeme radi za tvojú spätnú väzbu k akémukoľvek predmetu. Pomôžeš tak iným študentom pri správnom výbrere</h4>
			<h6>Vaše odpovede pribežne spracovávame a pridávame nové otázky k predmetom</h6>
			{!sent ? (
				<form onSubmit={addFeedback}>
					<label>
						<span>Študijný odbor</span>
						<input
							type='text'
							value={feedback.fieldOfStudy}
							name='fieldOfStudy'
							placeholder='Študijný odbor'
							onChange={updateInput}
							required
						/>
					</label>
					<label>
						<span>Predmet</span>
						<input type='text' value={feedback.subject} name='subject' placeholder='Predmet' onChange={updateInput} required />
					</label>
					<label>
						<span>Ako by mala znieť otázka</span>
						<textarea
							value={feedback.question}
							name='question'
							placeholder='Otázka'
							onChange={updateInput}
							rows={4}
							required></textarea>
					</label>
					<label>
						<span>Aká je tvoja odpoveď </span>
						<textarea
							value={feedback.answer}
							name='answer'
							placeholder='Odpoveď'
							onChange={updateInput}
							rows={4}
							required></textarea>
					</label>
					<button type='submit'>Odoslať odpoveď</button>
				</form>
			) : (
				<h2>Ďakujeme za váš príspevok</h2>
			)}
		</>
	);
};

export default Feedback;
