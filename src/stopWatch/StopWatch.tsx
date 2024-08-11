import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Typography, 
  Box, 
  Modal, 
  Paper 
} from '@mui/material';

// 時間をフォーマットする関数
const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    let interval: number | null = null;
    if (isRunning && !isPaused) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && !isPaused && time !== 0) {
      if (interval) window.clearInterval(interval);
    }
    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isRunning, isPaused, time]);

  // 開始ボタンのハンドラ
  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  // 一時停止ボタンのハンドラ
  const handlePause = () => {
    setIsPaused(true);
  };

  // 再開ボタンのハンドラ
  const handleResume = () => {
    setIsPaused(false);
  };

  // 終了ボタンのハンドラ
  const handleEnd = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTotalTime(time);
    setShowModal(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        勤怠時間記録
      </Typography>
      <Typography variant="h2" gutterBottom>
        {formatTime(time)}
      </Typography>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Button variant="contained" color="primary" onClick={handleStart} disabled={isRunning}>
          開始
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePause} disabled={!isRunning || isPaused}>
          一時停止
        </Button>
        <Button variant="contained" color="primary" onClick={handleResume} disabled={!isPaused}>
          再開
        </Button>
        <Button variant="contained" color="error" onClick={handleEnd} disabled={!isRunning && !isPaused}>
          終了
        </Button>
      </Box>

      {/* 合計時間表示用モーダル */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            本日の合計勤務時間
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {formatTime(totalTime)}
          </Typography>
        </Paper>
      </Modal>
    </Box>
  );
};

export default StopWatch;