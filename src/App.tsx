import { Http2ServerRequest } from 'http2';
import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Faculties from './components/Faculties';
import Feedback from './components/Feedback';
import Subjects from './components/Subjects';

const inferencnaSiet = {
	question: 'Pre aký ročník vyberáš predmet?',
	items: [
		{
			value: '1. ročník',
			question: 'Pre aký semester vyberáš predmet?',
			items: [
				{
					value: 'Zimný semester',
					question: 'Chceš predmet navyše?',
					items: [
						{
							value: 'Áno',
							question: 'Potrebuješ k štúdiu ovládať dobre fyziku?',
							items: [
								{
									value: 'Áno',
									question: 'Chceš si prejsť základy fyziky?',
									items: [
										{
											value: 'Áno',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Úvod do fyziky a Anglický jazyk',
												},
												{
													value: 'Nie',
													result: 'Úvod do fyziky',
													link: 'uvod-do-fyziky.pdf',
												},
											],
										},
										{
											value: 'Nie',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Anglický jazyk',
													link: 'anglictina.pdf',
												},
												{
													value: 'Nie',
													result: 'Úvod do fyziky',
													link: 'uvod-do-fyziky.pdf',
												},
											],
										},
									],
								},
								{
									value: 'Nie',
									question: 'Chceš si prejsť základy fyziky?',
									items: [
										{
											value: 'Áno',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Úvod do fyziky a Anglický jazyk',
												},
												{
													value: 'Nie',
													result: 'Úvod do fyziky',
													link: 'uvod-do-fyziky.pdf',
												},
											],
										},
										{
											value: 'Nie',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Anglický jazyk',
													link: 'anglictina.pdf',
												},
												{
													value: 'Nie',
													result: 'Pre Vami zvolené kritéria neexistuje predmet',
												},
											],
										},
									],
								},
							],
						},
						{
							value: 'Nie',
							question: 'Potrebuješ k štúdiu ovládať dobre fyziku?',
							items: [
								{
									value: 'Áno',
									question: 'Chceš si prejsť základy fyziky?',
									items: [
										{
											value: 'Áno',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Úvod do fyziky a Anglický jazyk',
												},
												{
													value: 'Nie',
													result: 'Úvod do fyziky',
													link: 'uvod-do-fyziky.pdf',
												},
											],
										},
										{
											value: 'Nie',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Anglický jazyk',
													link: 'anglictina.pdf',
												},
												{
													value: 'Nie',
													result: 'Pre Vami zvolené kritéria neexistuje predmet',
												},
											],
										},
									],
								},
								{
									value: 'Nie',
									question: 'Chceš si prejsť základy fyziky?',
									items: [
										{
											value: 'Áno',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Úvod do fyziky a Anglický jazyk',
												},
												{
													value: 'Nie',
													result: 'Úvod do fyziky',
													link: 'uvod-do-fyziky.pdf',
												},
											],
										},
										{
											value: 'Nie',
											question: 'Chceš 6 kreditov navyše, ale za nezáživné hodiny angličtiny?',
											items: [
												{
													value: 'Áno',
													result: 'Anglický jazyk',
													link: 'anglictina.pdf',
												},
												{
													value: 'Nie',
													result: 'Pre Vami zvolené kritéria neexistuje predmet',
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					value: 'Letný semester',
					result: 'Pre Vami zvolené kritéria neexistuje predmet',
				},
			],
		},
		{
			value: '2. ročník',
			question: 'Pre aký semester vyberáš predmet?',
			items: [
				{
					value: 'Zimný semester',
					question: 'Robí ti problém matematika?',
					items: [
						{
							value: 'Nie',
							question: 'Zvládaš dobre aj dlhšie prednášky a cvičenia?',
							items: [
								{
									value: 'Áno',
									question: 'Robí ti problém mať školu v piatok?',
									items: [
										{
											value: 'Áno',
											result: 'Diskrétna matematika',
											link: 'diskretna-matematika.pdf',
										},
										{
											value: 'Nie',
											result: 'Diskrétna matematika',
											link: 'diskretna-matematika.pdf',
										},
									],
								},
								{
									value: 'Nie',
									question: 'Robí ti problém mať školu v piatok?',
									items: [
										{
											value: 'Áno',
											question: 'Chceš sa na voliteľnom predmete venovať matematike?',
											items: [
												{
													value: 'Áno',
													result: 'Diskrétna matematika',
													link: 'diskretna-matematika.pdf',
												},
												{
													value: 'Nie',
													result: 'Podniková ekonomika',
													link: 'podnikova-ekonomika.pdf',
												},
											],
										},
										{
											value: 'Nie',
											result: 'Diskrétna matematika',
											link: 'diskretna-matematika.pdf',
										},
									],
								},
							],
						},
						{
							value: 'Áno',
							question: 'Zvládaš dobre aj dlhšie prednášky a cvičenia?',
							items: [
								{
									value: 'Áno',
									question: 'Robí ti problém mať školu v piatok?',
									items: [
										{
											value: 'Áno',
											result: 'Podniková ekonomika',
											link: 'podnikova-ekonomika.pdf',
										},
										{
											value: 'Nie',
											question: 'Chceš sa na voliteľnom predmete venovať matematike?',
											items: [
												{
													value: 'Áno',
													result: 'Diskrétna matematika',
													link: 'diskretna-matematika.pdf',
												},
												{
													value: 'Nie',
													result: 'Podniková ekonomika',
													link: 'podnikova-ekonomika.pdf',
												},
											],
										},
									],
								},
								{
									value: 'Nie',
									question: 'Robí ti problém mať školu v piatok?',
									items: [
										{
											value: 'Áno',
											result: 'Podniková ekonomika',
											link: 'podnikova-ekonomika.pdf',
										},
										{
											value: 'Nie',
											result: 'Podniková ekonomika',
											link: 'podnikova-ekonomika.pdf',
										},
									],
								},
							],
						},
					],
				},
				{
					value: 'Letný semester',
					question: 'Chceš na voliteľnom predmete programovať?',
					items: [
						{
							value: 'Áno',
							question: 'Vyhovuje ti skupinová práca na zadaniach?',
							items: [
								{
									value: 'Áno',
									question: 'Vadia ti nudné prednášky alebo cvičenia?',
									items: [
										{
											value: 'Áno',
											result: 'Základy cloudových technológií',
											link: 'zaklady-cloudovych-technologii.pdf',
										},
										{
											value: 'Nie',
											result: 'Základy cloudových technológií',
											link: 'zaklady-cloudovych-technologii.pdf',
										},
									],
								},
								{
									value: 'Nie',
									question: 'Vadia ti nudné prednášky alebo cvičenia?',
									items: [
										{
											value: 'Áno',
											result: 'Základy cloudových technológií',
											link: 'zaklady-cloudovych-technologii.pdf',
										},
										{
											value: 'Nie',
											result: 'Rozvrhovanie a logistika',
											link: 'rozvrhovanie-a-logistika.pdf',
										},
									],
								},
							],
						},
						{
							value: 'Nie',
							question: 'Vyhovuje ti skupinová práca na zadaniach?',
							items: [
								{
									value: 'Áno',
									question: 'Vadia ti nudné prednášky alebo cvičenia?',
									items: [
										{
											value: 'Áno',
											result: 'Základy cloudových technológií',
											link: 'zaklady-cloudovych-technologii.pdf',
										},
										{
											value: 'Nie',
											result: 'Rozvrhovanie a logistika',
											link: 'rozvrhovanie-a-logistika.pdf',
										},
									],
								},
								{
									value: 'Nie',
									question: 'Vadia ti nudné prednášky alebo cvičenia?',
									items: [
										{
											value: 'Áno',
											result: 'Rozvrhovanie a logistika',
											link: 'rozvrhovanie-a-logistika.pdf',
										},
										{
											value: 'Nie',
											result: 'Rozvrhovanie a logistika',
											link: 'rozvrhovanie-a-logistika.pdf',
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			value: '3. ročník',
			question: 'Pre aký semester vyberáš predmet?',
			items: [
				{
					value: 'Zimný semester',
					question: 'Chceš na voliteľnom predmete programovať?',
					items: [
						{
							value: 'Áno',
							question: 'Chceš predmet ukončiť iba klasifikovaným zápočtom?',
							items: [
								{
									value: 'Áno',
									question: 'Prekáža ti práca na semestrálnych projektoch?',
									items: [
										{
											value: 'Áno',
											result: 'Znalostné systémy',
											link: 'znalostne-systemy.pdf',
										},
										{
											value: 'Nie',
											result: 'Vývoj mobilných inteligentných riešení',
											link: 'vyvoj-mobilnych-inteligentnych-rieseni.pdf',
										},
									],
								},
								{
									value: 'Nie, môže byť aj skúška',
									question: 'Prekáža ti práca na semestrálnych projektoch?',
									items: [
										{
											value: 'Áno',
											result: 'Znalostné systémy',
											link: 'znalostne-systemy.pdf',
										},
										{
											value: 'Nie',
											question: 'Chceš čo najmenej hodín vyučovania?',
											items: [
												{
													value: 'Áno',
													result: 'Vývoj mobilných inteligentných riešení',
													link: 'vyvoj-mobilnych-inteligentnych-rieseni.pdf',
												},
												{
													value: 'Nie',
													result: 'Znalostné systémy',
													link: 'znalostne-systemy.pdf',
												},
											],
										},
									],
								},
							],
						},
						{
							value: 'Nie',
							question: 'Chceš predmet ukončiť iba klasifikovaným zápočtom?',
							items: [
								{
									value: 'Áno',
									question: 'Prekáža ti práca na semestrálnych projektoch?',
									items: [
										{
											value: 'Áno',
											result: 'Oceňovanie investičných zámerov',
											link: 'ocenovanie-investicnych-zamerov.pdf',
										},
										{
											value: 'Nie',
											result: 'Znalostné systémy',
											link: 'znalostne-systemy.pdf',
										},
									],
								},
								{
									value: 'Nie, môže byť aj skúška',
									question: 'Prekáža ti práca na semestrálnych projektoch?',
									items: [
										{
											value: 'Áno',
											question: 'Zvládaš nudné prednášky a nevadia ti?',
											items: [
												{
													value: 'Áno',
													result: 'Optimalizácia v ekonomických procesoch',
													link: 'optimalizacia-v-ekonomickych-procesoch.pdf',
												},
												{
													value: 'Nie',
													result: 'Oceňovanie investičných zámerov',
													link: 'ocenovanie-investicnych-zamerov.pdf',
												},
											],
										},
										{
											value: 'Nie',
											question: 'Zvládaš nudné prednášky a nevadia ti?',
											items: [
												{
													value: 'Áno',
													result: 'Optimalizácia v ekonomických procesoch',
													link: 'optimalizacia-v-ekonomickych-procesoch.pdf',
												},
												{
													value: 'Nie',
													result: 'Znalostné systémy',
													link: 'znalostne-systemy.pdf',
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					value: 'Letný semester',
					question: 'Chceš predmet ukončiť iba klasifikovaným zápočtom?',
					items: [
						{
							value: 'Áno',
							question: 'Chceš pracovať na skupinovom projekte?',
							items: [
								{
									value: 'Áno',
									question: 'Chceš mať čo najmenej prednášok?',
									items: [
										{
											value: 'Áno',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
											],
										},
										{
											value: 'Nie, nerobia mi problém',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
											],
										},
									],
								},
								{
									value: 'Nie',
									question: 'Chceš mať čo najmenej prednášok?',
									items: [
										{
											value: 'Áno',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
												{
													value: 'Nie',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
											],
										},
										{
											value: 'Nie, nerobia mi problém',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
											],
										},
									],
								},
							],
						},
						{
							value: 'Nie, môže byť aj skúška',
							question: 'Chceš pracovať na skupinovom projekte?',
							items: [
								{
									value: 'Áno',
									question: 'Chceš mať čo najmenej prednášok?',
									items: [
										{
											value: 'Áno',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
											],
										},
										{
											value: 'Nie, nerobia mi problém',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
											],
										},
									],
								},
								{
									value: 'Nie',
									question: 'Chceš mať čo najmenej prednášok?',
									items: [
										{
											value: 'Áno',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
												{
													value: 'Nie',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
											],
										},
										{
											value: 'Nie, nerobia mi problém',
											question: 'Máš záujem dozvedieť sa niečo z praxe?',
											items: [
												{
													value: 'Áno',
													result: 'Hospodárska informatika v praxi',
													link: 'hospodarska-informatika-v-praxi.pdf',
												},
												{
													value: 'Nie',
													result: 'Účtovníctvo v informačných systémoch',
													link: 'uctovnictvo-v-informacnych-systemoch.pdf',
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

function App() {
	let navigate = useNavigate();
	let location = useLocation();
	let [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		console.log(location);
	}, [location]);

	return (
		<div className='app'>
			<header>
				<div
					className='logo'
					onClick={(e) => {
						navigate('/predmety');
						if (searchParams.has('items')) {
							let newSearch = searchParams;
							newSearch.delete('items');
							setSearchParams(newSearch);
						}
					}}>
					Výber voliteľných predmetov TUKE
				</div>
				<nav>
					<a className={location.pathname === '/fakulty' ? 'active' : ''} onClick={() => navigate('/fakulty')}>
						Fakulty
					</a>
					<a
						className={location.pathname === '/predmety' || location.pathname === '/' ? 'active' : ''}
						onClick={() => navigate('/predmety')}>
						Predmety
					</a>
					<a className={location.pathname === '/feedback' ? 'active' : ''} onClick={() => navigate('/feedback')}>
						Spätná väzba
					</a>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Subjects inferencnaSiet={inferencnaSiet} />} />
					<Route path='/predmety' element={<Subjects inferencnaSiet={inferencnaSiet} />} />
					<Route path='/fakulty' element={<Faculties />} />
					<Route path='/feedback' element={<Feedback />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
