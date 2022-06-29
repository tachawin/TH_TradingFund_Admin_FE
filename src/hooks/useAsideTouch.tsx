import { useContext, useEffect, useState } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';
import { ThemeContext } from '../contexts/themeContext';

const useAsideTouch = () => {
	const { asideStatus } = useContext(ThemeContext);
	const hasTouchButton = true;

	const asideWidthWithSpace = (195 + 13) * -1;

	const x = useMotionValue(
		process.env.REACT_APP_ASIDE_TOUCH_STATUS === 'true' ? 0 : asideWidthWithSpace,
	);
	const [touchStatus, setTouchStatus] = useState(!x.get());
	const left = useTransform(
		x,
		[-100, -90, -10, 0],
		[asideWidthWithSpace, asideWidthWithSpace, 0, 0],
	);

	// X value get
	useEffect(() => {
		function updateX() {
			const X = x.get();
			setTouchStatus(!X);
		}

		const unsubscribeX = x.onChange(updateX);

		return () => {
			unsubscribeX();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Set Aside & Touch Button value
	useEffect(() => {
		if (!hasTouchButton) {
			x.set(0);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasTouchButton]);

	//  for start minimize aside
	useEffect(() => {
		if (!asideStatus) {
			x.set(0);
			setTouchStatus(false);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asideStatus]);

	const asideStyle = hasTouchButton ? { left } : { left: '0rem' };

	return { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x };
};

export default useAsideTouch;
