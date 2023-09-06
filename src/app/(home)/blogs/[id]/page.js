'use client';

/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = ({ params }) => {
	const [blog, setBlog] = useState({});

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios(`/api/blog/${params.id}`);
				setBlog(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchData();
	}, [params]);

	return (
		<div className=" min-h-screen py-6">
			<div className=" max-w-2xl p-6 mx-auto">
				<h2 className="mb-4 text-2xl font-semibold">{blog.title}</h2>
				<Image src={blog.image} alt={blog.title} className="w-full mb-4 rounded-md" width={1000} height={400} />
				<p className="text-gray-600">{blog.subtitle}</p>
				<p className="mt-2 text-gray-800">{blog.content}</p>
			</div>
		</div>
	);
};

export default page;
