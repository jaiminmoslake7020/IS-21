/**
 * @openapi
 * components:
 *   schema:
 *     Success:
 *       type: object
 *       required:
 *        - status
 *        - message
 *       properties:
 *         status:
 *           type: number
 *         message:
 *           type: string
 */

export type Success = {
    status: number,
    message: string
}
