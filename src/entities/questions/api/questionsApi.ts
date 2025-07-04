import { baseApi } from '@/shared/api/base/baseApi.ts'
import { serializeParams } from '@/shared/utils/serializeParams.ts'
import type { FiltersQuery, Question, QuestionsResponse } from '../model/types.ts'

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsResponse, FiltersQuery>({
      query: (filters) => {
        const params = serializeParams({
          ...filters,
          page: filters.page ?? 1,
        })
        return {
          url: 'questions/public-questions',
          params,
        }
      },
    }),
    getQuestion: build.query<Question, number>({
      query: (id) => {
        return {
          url: `/questions/public-questions/${id}`,
        }
      },
    }),
  }),
})

export const { useGetQuestionsQuery, useGetQuestionQuery } = questionsApi
