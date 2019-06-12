import React from 'react';
import ReactLoading from 'react-loading';

const ReactLoader = ({ type, color, width, height, className, delay }) => (
	<ReactLoading type={type} color={color} height={width} width={height} className={className} delay={delay} />
);

export default ReactLoader;