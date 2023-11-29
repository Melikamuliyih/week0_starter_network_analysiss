import pytest
from src.loader import SlackDataLoader


def test_slack_data_loader_columns():
	loader=SlackDataLoader()

	df = loader.get_data()

	expected_columns = ['message', 'reply', 'reaction']

	assert all(column in df.columns for colum in expected_columns)